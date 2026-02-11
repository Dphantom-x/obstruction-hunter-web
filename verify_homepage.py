from playwright.sync_api import sync_playwright
import os

def run():
    with sync_playwright() as p:
        browser = p.chromium.launch()
        page = browser.new_page(viewport={"width": 1400, "height": 900})

        cwd = os.getcwd()
        file_path = f"file://{cwd}/index.html"
        print(f"Navigating to: {file_path}")
        page.goto(file_path)

        # Ensure styles are applied and fonts loaded (basic wait)
        page.wait_for_timeout(1000)

        page.screenshot(path="homepage.png", full_page=True)
        print("Screenshot saved to homepage.png")
        browser.close()

if __name__ == "__main__":
    run()
