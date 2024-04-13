import requests


def get_image_from_url():
    url = 'https://api.github.com/users/anthonypernia'
    tag = 'avatar_url'
    response = requests.get(url)
    data = response.json()
    image_url = data[tag]
    return image_url


def add_favicon(file_path):
    image_favicon = get_image_from_url()
    data_html = ''
    with open(file_path, 'r') as file:
        data_html = file.read()
        data_html = data_html.replace('</head>', f'<link rel="icon" href="{image_favicon}"></head>')

def update_head(file_path):
    add_favicon(file_path)

if __name__ == '__main__':
    update_head('./index.html')


