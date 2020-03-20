class Doctor < ActiveRecord::Base
    has_many :appointments
    has_many :patients, through: :appointments
    # @@all=[]
    # def intialize()

    # end

    # def patients
    #     Patient.all.select do |patient|
    #         patient.doctor == self
    #     end
    # end
end

