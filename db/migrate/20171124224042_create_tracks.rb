class CreateTracks < ActiveRecord::Migration[5.1]
  def change
    create_table :tracks do |t|
      t.integer :artistId
      t.string :title
      t.string :album
      t.text :description

      t.timestamps
    end
  end
end
