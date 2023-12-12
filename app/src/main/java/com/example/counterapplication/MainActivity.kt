package com.example.counterapplication

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle




class MainActivity : AppCompatActivity() {

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)
        val button: Button = findViewById<>(R.id.myButton)
        button.setOnClickListener {
            println("Hello World")
        }
    }
}

