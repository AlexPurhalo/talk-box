class Comment < ActiveRecord::Base
  belongs_to :box
  belongs_to :user
  validates :box, presence: true
  validates :body, presence: true
end
