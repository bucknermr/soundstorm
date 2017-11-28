class ChangeBioForArtists < ActiveRecord::Migration[5.1]
  def change
    remove_column :artists, :bio
    add_column :artists, :bio, :text, default: ''
  end
end
