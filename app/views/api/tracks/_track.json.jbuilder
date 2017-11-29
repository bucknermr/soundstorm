json.key_format! camelize: :lower

json.extract! track, :id, :title, :artist_id
json.audio_url asset_path(track.audio.url)
json.image_url asset_path(track.image.url)
