class Patient
    attr_reader :name 
    attr_accessor :sick
    @@all=[]
    def initialize(name, sick=true)
        @name = name
        @sick = sick
        Patient.all << self
    end

    def self.all 
        @@all
    end

    def call_and_make_appointment(doctor)
        Appointment.new(self, doctor)
    end

    def appointments
        Appointment.all.select do |appointment|
            appointment.patient == self
        end 
    end

    def doctors
        # return a list of all of the doctors that are associated with this patient
        self.appointments.map do |appointment|
            appointment.doctor
        end.uniq
    end


end