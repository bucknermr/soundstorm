class ChangeArtistIdColumnNameInTracks < ActiveRecord::Migration[5.1]
  def change
    remove_column :tracks, :artistId
    add_column :tracks, :artist_id, :integer, null: false
    add_index :tracks, :artist_id
  end
end
