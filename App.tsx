import React from "react";
import {SafeAreaView, ScrollView, Text, View} from "react-native";
import {boolean, string} from "yup";
import {
	DesignSystemProvider,
	Box,
	Stack,
	FormGroup,
	TextInput,
	Form,
	CheckBox,
} from "./ds";

export default function App() {
	return (
		<DesignSystemProvider>
			<SafeAreaView style={{flex: 1}}>
				<ScrollView style={{flex: 1}}>
					<Box padding="medium">
						<Form
							initialValues={{checkbox: false}}
							validationSchema={{
								email: string().required().email(),
								password: string().required().min(8),
								checkbox: boolean().oneOf(
									[true],
									// "This checkbox must be checked",
								),
							}}
						>
							<Stack space="medium">
								<FormGroup
									label="Email"
									validation={string().required().email()}
								>
									<TextInput
										name="email"
										placeholder="joe@unibuddy.com"
									/>
								</FormGroup>
								<FormGroup label="Password">
									<TextInput
										type="password"
										name="password"
									/>
								</FormGroup>
								<CheckBox name="checkbox">
									I agree to receiving marketing
									communications from the Institution via the
									Unibuddy platform and via email. The
									marketing communications will contain
									further information about the institution,
									its courses and other information considered
									to be of legitimate interest to you.
								</CheckBox>
							</Stack>
						</Form>
					</Box>
				</ScrollView>
			</SafeAreaView>
		</DesignSystemProvider>
	);
}
