class Appointment
    attr_reader :patient
    attr_accessor :doctor
    @@all = []

    def initialize(patient, doctor)
        @patient = patient 
        @doctor = doctor
        Appointment.all << self
    end

    def self.all 
        @@all
    end

end

