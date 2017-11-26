json.extract! @track, :id, :title, :description
json.audio asset_path(@track.audio.url)
json.image asset_path(@track.image.url)
