# backend/api/scraper.py
from selenium import webdriver
from selenium.webdriver.chrome.service import Service as ChromeService
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.options import Options
from webdriver_manager.chrome import ChromeDriverManager
import time

def scrape_instagram_followers(url):
    # Set up Chrome options
    chrome_options = Options()
    chrome_options.add_argument("--headless")  # Run headlessly
    chrome_options.add_argument("--no-sandbox")
    chrome_options.add_argument("--disable-dev-shm-usage")

    # Set up the WebDriver
    driver = webdriver.Chrome(service=ChromeService(ChromeDriverManager().install()), options=chrome_options)
    
    try:
        driver.get(url)
        time.sleep(5)  # Wait for the page to load (adjust as necessary)

        # Find the followers section (you may need to adjust the selector based on the actual HTML structure)
        followers = driver.find_elements(By.XPATH, "//a[contains(@href, '/followers')]")
        followers_list = [follower.text for follower in followers]

        return followers_list
    except Exception as e:
        print(f"Error occurred: {e}")
        return None
    finally:
        driver.quit()
