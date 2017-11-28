class AddNullConstraintToBio < ActiveRecord::Migration[5.1]
  def change
    change_column :artists, :bio, :text, default: '', null: false
  end
end
