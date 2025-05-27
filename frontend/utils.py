import json
import os
from django.utils.translation import get_language

def load_json_data():
    """
    Load and parse JSON data file.
    Returns:
        dict: The loaded JSON data and current language
        None: If there was an error loading the data
    """
    # Get the absolute path to the JSON file
    json_path = os.path.join(os.path.dirname(__file__), 'data.json')
    
    try:
        # Open and read the JSON file
        with open(json_path, 'r', encoding='utf-8') as file:
            data = json.load(file)
            
        # Get current language
        current_lang = get_language()
        
        return {
            'data': data,
            'current_lang': current_lang
        }
    
    except FileNotFoundError:
        print(f"Error: Could not find data.json at {json_path}")
        return None
    except json.JSONDecodeError as e:
        print(f"Error: Invalid JSON format in data.json: {e}")
        return None