class AddPeaksToTracks < ActiveRecord::Migration[5.1]
  def change
    add_column :tracks, :peaks, :float, array: true, null: false, default: []
  end
end
