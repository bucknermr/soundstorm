class RemoveDefaultValues < ActiveRecord::Migration[5.1]
  def change
    change_column_default :tracks, :peaks, nil
    change_column_default :tracks, :duration, nil
  end
end
