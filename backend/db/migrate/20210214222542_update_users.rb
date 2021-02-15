class UpdateUsers < ActiveRecord::Migration[6.1]
  def change
    remove_column :users, :address, :string
    add_column :users, :email, :string, null: false
    add_column :users, :password, :string, null: false
    add_column :users, :street, :string, null: false
    add_column :users, :city, :string, null: false
    add_column :users, :province, :string, null: false
    add_column :users, :post_code, :string, null: false
  
    create_table :tasks do |t|
      # t.references :user, foreign_key: true
      t.string :name, null: false
      t.text :description, null: false
      t.datetime :accepted_at
      t.datetime :completed_at
      t.integer :recipient_id, null: false
      t.integer :helper_id
      t.integer :rating_of_recipient
      t.text :review_of_recipient
      t.integer :rating_of_helper
      t.text :review_of_helper
      t.timestamps
    end
  end
end
