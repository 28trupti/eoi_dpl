class EoiQuestionaire < ApplicationRecord
    has_one_attached :file
    belongs_to :user
end
