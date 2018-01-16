class AddDurationToTracks < ActiveRecord::Migration[5.1]
  def change
    add_column :tracks, :duration, :float, null: false, default: 0
  end
end
