class User < ApplicationRecord
  # has_many :tasks, dependent: :destroy
  has_secure_password
  
  validates :name, presence: true
  validates :email, uniqueness: { case_sensitive: false }
  validates :password, length: { minimum: 4 }
  validates :street, presence: true
  validates :city, presence: true
  validates :province, presence: true
  validates :post_code, presence: true
end
