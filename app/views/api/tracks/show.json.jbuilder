json.key_format! camelize: :lower

json.partial! '/api/tracks/track', track: @track


# json.set :track do
#   json.partial! '/api/tracks/track', track: @track
# end
#
# json.set :artist do
#
# end
