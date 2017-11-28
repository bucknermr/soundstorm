json.key_format! camelize: :lower

json.extract! artist, :id, :name, :bio
json.image_url asset_path(artist.image.url)
