import json
from langchain_core.documents import Document  # Ensure this import is correct
import os

def dataconverter():
    # Load the JSON data from the file
    print(os.getcwd())
    with open('data/data.json') as file:
        data = json.load(file)

    # Extract relevant fields and store them in a list
    items = []
    for item in data:
        item_info = {
            'product_name': item.get('product_name'),
            'product_desc': item.get('product_desc'),
            'price': item.get('price'),
            'types': item.get('types'),
            'categories': item.get('categories'),
            'color_available': item.get('color_available'),
            'size':item.get('size')
        }
        items.append(item_info)
    
    # Create documents
    docs = []
    for entry in items:
        metadata = {"product_name": entry['product_name']}
        
        # Convert the fields to a string format (JSON format)
        page_content = json.dumps({
            'product_desc': entry['product_desc'],
            'price': entry['price'],
            'types': entry['types'],
            'categories': entry['categories'],
            'color_available': entry['color_available'],
            'size':entry['size']
        })
        
        # Create the Document object with page content and metadata
        doc = Document(page_content=page_content, metadata=metadata)
        
        # Append the doc to the list
        docs.append(doc)
    
    return docs  # Return the list of documents

