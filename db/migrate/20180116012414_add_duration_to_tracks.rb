class AddDurationToTracks < ActiveRecord::Migration[5.1]
  def change
    add_column :tracks, :duration, :float
  end
end
