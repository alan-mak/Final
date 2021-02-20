class LatLongPrecision < ActiveRecord::Migration[6.1]
  def change
    change_column_default :users, :lat, from: nil, to: {:precision=>10, :scale=>6}
    change_column_default :users, :lng, from: nil, to: {:precision=>10, :scale=>6}
  end
end
