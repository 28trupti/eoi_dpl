class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable,
         :recoverable, :rememberable, :validatable

  has_one_attached :image

  has_many :eoi_questionaires
 

def before_import_save(record)
  self.password = "1linkwok@"
  self.password_confirmation = "1linkwok@"
end

 

end
