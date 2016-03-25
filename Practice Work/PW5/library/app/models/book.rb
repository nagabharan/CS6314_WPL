class Book < ActiveRecord::Base
	validates :isbn, presence: true, length: { minimum: 10 }
	validates :title, presence: true
end
