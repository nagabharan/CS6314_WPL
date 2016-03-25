class CreateBooks < ActiveRecord::Migration
  def change
    create_table :books do |t|
      t.string :title
      t.string :author
      t.integer :isbn
      t.text :description

      t.timestamps null: false
    end
  end
end
