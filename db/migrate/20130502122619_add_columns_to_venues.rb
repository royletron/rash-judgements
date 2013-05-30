class AddColumnsToVenues < ActiveRecord::Migration
  def change
    add_column :venues, :address, :string
    add_column :venues, :city, :string
    add_column :venues, :region, :string
    add_column :venues, :postcode, :string
    add_column :venues, :phone, :string
    add_column :venues, :website, :string
  end
end
