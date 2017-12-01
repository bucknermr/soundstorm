json.key_format! camelize: :lower

artists = {};

json.tracks do
  @tracks.each do |track|
    json.set! track.id do
      json.partial! '/api/tracks/track', track: track
    end

    artists[track.artist_id] = track.artist
  end
end

json.artists do
  artists.each do |key, artist|
    json.set! key do
      json.partial! 'api/artists/artist', artist: artist
    end
  end
end
