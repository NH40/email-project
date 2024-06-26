import { useQuery } from '@tanstack/react-query'
import parse from "html-react-parser"
import { emailService } from '../../service/email.service'
import styles from "./EmailList.module.scss"

export function EmailList() {
	const {data} = useQuery({
		queryKey: ["email list"], 
		queryFn: () => emailService.getEmails()
	})
	
	return <div className={styles.EmailList}>
		{data?.map(email => (
			<div key={email.text}>
				{parse(email.text)}
			</div>
		))}
	</div>
}