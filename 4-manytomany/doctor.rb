class Doctor
    attr_reader :name, :specialty
    @@all = []
    def initialize(name, specialty)
        @name = name
        @specialty = specialty
        Doctor.all << self 
    end

    def self.all 
        @@all
    end

    def appointments
        Appointment.all.select do |appointment|
            appointment.doctor == self
        end
    end

    def patients
        self.appointments.map do |appointment|
            appointment.patient
        end.uniq
    end
end