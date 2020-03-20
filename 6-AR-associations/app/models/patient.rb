class Patient < ActiveRecord::Base
    has_many :appointments
    has_many :doctors, through: :appointments 

    # @@all = [] 
    # def initialize(doctor)
    #     @doctor = doctor
    # end

    # def doctor 
    #     @doctor
    # end
end

#class:
# create a new patient

# instance:
# know all of it's attributes