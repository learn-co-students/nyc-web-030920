Doctor.destroy_all
Patient.destroy_all 
Appointment.destroy_all

d1 = Doctor.create(name: "Justin", specialty: "IDK", age: 21, hospital_name: "Queens Hospital")

p1 = Patient.create(name: "Ethan", age:21, is_sick: false, gender: "M", phone_number:1234)

a1 = Appointment.create(doctor:d1, patient:p1)