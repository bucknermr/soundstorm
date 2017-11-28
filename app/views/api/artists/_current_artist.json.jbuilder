json.key_format! camelize: :lower

json.extract! artist, :id, :email, :name, :bio
json.image_url asset_path(artist.image.url)
