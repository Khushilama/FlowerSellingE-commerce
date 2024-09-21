from langchain_core.output_parsers import StrOutputParser
from langchain_core.prompts import ChatPromptTemplate
from langchain_core.runnables import RunnablePassthrough
from langchain_google_genai import ChatGoogleGenerativeAI
from happybot.data_ingest import ingestdata
import os
from dotenv import load_dotenv

load_dotenv()

GENAI_API_KEY=os.getenv("API_KEY")

def generation(vstore):
    retriever = vstore.as_retriever(search_kwargs={"k": 3})

    FLOWER_BOT_TEMPLATE = """
    Your ecommerce bot is an expert in product recommendations and customer queries.
    It analyzes product name, price,types, categories, description, color_available and size to provide accurate and helpful responses.
    Ensure your answers are relevant to the product context and refrain from straying off-topic.
    Your responses should be concise and informative.

    CONTEXT:
    {context}

    QUESTION: {question}

    YOUR ANSWER:
    """


    prompt = ChatPromptTemplate.from_template(FLOWER_BOT_TEMPLATE)

    # Specify the model for ChatGoogleGenerativeAI
    llm = ChatGoogleGenerativeAI(model="gemini-pro",google_api_key=GENAI_API_KEY,temperature=0.3)

    chain = (
        {"context": retriever, "question": RunnablePassthrough()}
        | prompt
        | llm
        | StrOutputParser()
    )

    return chain

if __name__ == '__main__':
    vstore = ingestdata("done")
    chain = generation(vstore)
    print(chain.invoke("can you provide a provide types of flowers"))
