import 'package:flutter/material.dart';

class CustomTextField extends StatelessWidget {
  final TextEditingController controller;
  const CustomTextField({
    Key? key,
    required this.controller,
  }) : super(key: key);
  @override
  Widget build(BuildContext context) {
    return TextFormField(
      controller: controller,
      decoration: InputDecoration(
          border: const OutlineInputBorder(
              hintText: hintText,
              borderSide: BorderSide(
                color: Colors.black45,
              )),
          enableBorder: const OutlineInputBorder(
              borderSide: BorderSide(
            color: Colors.black45,
          ))),
      validator: (val) {},
    );
  }
}
