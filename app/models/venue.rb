class Venue < ActiveRecord::Base
  attr_accessible :description, :latitude, :longitude, :name, :address, :city, :region, :postcode, :phone, :website
end
