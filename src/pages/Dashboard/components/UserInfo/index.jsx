import { useContext } from "react";
import { Container } from "../../../../assets/styles/Container";
import { Title } from "../../../../assets/styles/Typography";
import { DashboardContext } from "../../../../contexts/DashboardContext";
import { StyledUserInfo } from "./styles";

export const UserInfo = () => {
	const { userInfo: user } = useContext(DashboardContext);

	return (
		<Container BoxShadow={true}>
			<StyledUserInfo>
				<Title>Olá, {user.name}</Title>
				<p>{user.course_module}</p>
			</StyledUserInfo>
		</Container>
	);
};
