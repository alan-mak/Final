class AddLatLong < ActiveRecord::Migration[6.1]
  def change
    add_column :users, :lat, :decimal
    add_column :users, :long, :decimal
  end
end
