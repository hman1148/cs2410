package com.example.javafx;

import javafx.fxml.FXML;
import javafx.scene.control.Label;

public class HelloController {

    @FXML
    private int count = 0;

    @FXML
    private Label countText;


    @FXML
    protected void increment() {
        countText.setText(" " + count ++);
    }
    @FXML
    protected void decrement() {
        countText.setText(" " + count --);
    }
}