class CreateTracks < ActiveRecord::Migration[5.1]
  def change
    create_table :tracks do |t|
      t.integer :artistId, null: false
      t.string :title, null: false
      t.text :description

      t.timestamps
    end
  end
end
