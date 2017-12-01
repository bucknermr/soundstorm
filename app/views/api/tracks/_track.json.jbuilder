json.key_format! camelize: :lower

json.extract! track, :id, :title, :description, :artist_id
json.audio_url asset_path(track.audio.url)
json.image_url asset_path(track.image.url)
json.comment_count track.comments.length
