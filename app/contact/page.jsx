"use client"

import { useRef, useState } from "react"
import emailjs from "emailjs-com"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select"
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa"
import { motion } from "framer-motion"

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "(+234) 913 627 1024"
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "Rotimanchase@gmail.com"
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Address",
    description: "No 40 Daniel Bighoro street, ayobo, Lagos state, NG"
  },
]

const Contact = () => {
  const form = useRef()
  const [selectedService, setSelectedService] = useState("")

  const sendEmail = (e) => {
    e.preventDefault()

    // Validate service selection
    if (!selectedService) {
      alert("⚠️ Please select a service")
      return
    }

    // Create template params object
    const templateParams = {
      firstname: form.current.firstname.value,
      lastname: form.current.lastname.value,
      email: form.current.email.value,
      phone: form.current.phone.value,
      service: selectedService,
      message: form.current.message.value,
    }

    console.log("Sending with params:", templateParams) // Debug
    console.log("Service ID:", "service_a9bmc2b")
    console.log("Template ID:", "template_w4xxnk6")

    emailjs
      .send(
        "service_a9bmc2b",      // ✅ Service ID
        "template_bk9ue4w",     // ✅ Template ID
        templateParams,
        "hyi_hxcLgmA0C0W3A"     // ✅ Public Key
      )
      .then(
        (result) => {
          console.log("Success:", result)
          alert("✅ Message sent successfully!")
          form.current.reset()
          setSelectedService("") // Reset the select
        },
        (error) => {
          console.error("Full error:", error)
          alert("❌ Failed to send message. Please try again.")
        }
      )
  }

  return (
    <motion.div
      className="py-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: "easeIn" } }}
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">

          {/* === Left Side (Form) === */}
          <div className="xl:w-[54%] order-2 xl:order-none">
            <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
              <h3 className="text-4xl text-accent">Let's work together</h3>
              <p className="text-white/50">
                Have a project in mind or just want to connect? I'm always open to new opportunities. 
                Fill out the form below, and I'll get back to you soon.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input name="firstname" type="text" placeholder="Firstname" required />
                <Input name="lastname" type="text" placeholder="Lastname" required />
                <Input name="email" type="email" placeholder="Email" required />
                <Input name="phone" type="text" placeholder="Phone number" />
              </div>

              {/* Hidden input to store service value for EmailJS */}
              <input type="hidden" name="service" value={selectedService} />

              {/* Service selection */}
              <Select value={selectedService} onValueChange={setSelectedService}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Choose a service</SelectLabel>
                    <SelectItem value="Frontend Development">Frontend Development</SelectItem>
                    <SelectItem value="Backend Development">Backend Development</SelectItem>
                    <SelectItem value="FullStack Development">FullStack Development</SelectItem>
                    <SelectItem value="AI Agent">AI Agent</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>

              <Textarea name="message" className="h-[200px]" placeholder="Type your message here" required />

              <Button type="submit" className="max-w-40" size="md">
                Send message
              </Button>
            </form>
          </div>

          {/* === Right Side (Contact Info) === */}
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => (
                <li key={index} className="flex flex-col gap-6">
                  <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                    <div className="text-[28px]">{item.icon}</div>
                  </div>
                  <div className="flex-1">
                    <p className="text-white/60">{item.title}</p>
                    <h3 className="text-xl">{item.description}</h3>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default Contact