from langchain_astradb import AstraDBVectorStore
from dotenv import load_dotenv
from langchain_google_genai import GoogleGenerativeAIEmbeddings
from happybot.dataconvertert import dataconverter
import os


load_dotenv()

GENAI_API_KEY=os.getenv("API_KEY")
ASTRA_DB_API_ENDPOINT=os.getenv("ASTRA_DB_API_END_POINT")
ASTRA_DB_APPLICATION_TOKEN=os.getenv("ASTRA_DB_APPLICATION_TOKENS")
ASTRA_DB_KEYSPACE=os.getenv("ASTRA_DB_KEYSPACE")

embedding = GoogleGenerativeAIEmbeddings(model="models/embedding-001", google_api_key=GENAI_API_KEY)

def ingestdata(status):
    vstore = AstraDBVectorStore(
            embedding=embedding,
            collection_name="chatbot_db",
            api_endpoint=ASTRA_DB_API_ENDPOINT,
            token=ASTRA_DB_APPLICATION_TOKEN,
            namespace=ASTRA_DB_KEYSPACE,
        )
    
    storage=status
    
    if storage==None:
        docs=dataconverter()
        inserted_ids = vstore.add_documents(docs)
    else:
        return vstore
    return vstore, inserted_ids

if __name__=='__main__':
    vstore,inserted_ids=ingestdata(None)
    print(f"\nInserted {len(inserted_ids)} documents.")
    results = vstore.similarity_search("can you tell me the low budget sound basshead.")
    for res in results:
            print(f"* {res.page_content} [{res.metadata}]")
            