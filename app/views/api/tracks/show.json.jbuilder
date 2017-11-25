json.extract! @track, :title, :description
json.audio asset_path(@track.audio.url)
