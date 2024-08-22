import { FaTelegramPlane } from 'react-icons/fa'
import { SiWebmoney } from 'react-icons/si'
import { FaFacebookSquare } from 'react-icons/fa'
import { FaYoutube } from 'react-icons/fa'
import { FaGithubAlt } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { IData, ICommunity } from '../../types/community'
interface CommunityListProps {
	data: IData[]
}

const CommunityList = ({ data }: CommunityListProps) => {
	const devkg = data?.[0]?.devkg || []
	const telegram_chats = data?.[0]?.telegram_chats || []
	const telegram_channels = data?.[0]?.telegram_channels || []
	const websites = data?.[0]?.websites || []
	const facebook = data?.[0]?.facebook || []
	const youtube = data?.[0]?.youtube || []
	const github = data?.[0]?.github || []
console.log(data);

	return (
		<>
			<div className='community--telegram'>
				<h1>Наши ресурсы в Telegram</h1>
				<div className='community--telegram__blocks'>
					{devkg.map((item: ICommunity, index: number) => (
						<Link to={`${item.value}`}>
							<div className={`community--telegram__blocks--block `}>
								<span>
									<FaTelegramPlane />
								</span>
								<p>{item.label}</p>
							</div>
						</Link>
					))}
				</div>
			</div>
			<div className='community--telegram'>
				<h1>Телеграм чаты</h1>
				<div className='community--telegram__blocks'>
					{telegram_chats.map((item: ICommunity, index: number) => (
						<Link to={`${item.value}`}>
							<div className={`community--telegram__blocks--block `}>
								<span>
									<FaTelegramPlane />
								</span>
								<p>{item.label}</p>
							</div>
						</Link>
					))}
				</div>
			</div>
			<div className='community--telegram'>
				<h1>Телеграм каналы</h1>
				<div className='community--telegram__blocks'>
					{telegram_channels.map((item: ICommunity, index: number) => (
						<Link to={item.value}>
							<div className={`community--telegram__blocks--block `}>
								<span>
									<FaTelegramPlane />
								</span>
								<p>{item.label}</p>
							</div>
						</Link>
					))}
				</div>
			</div>
			<div className='community--telegram'>
				<h1>Веб-сайты</h1>
				<div className='community--telegram__blocks'>
					{websites.map((item: ICommunity, index: number) => (
						<Link to={item.value}>
							<div
								className={`community--telegram__blocks--block community--telegram__blocks--websites `}
							>
								<span>
									<SiWebmoney />
								</span>
								<p>{item.label}</p>
							</div>
						</Link>
					))}
				</div>
			</div>
			<div className='community--telegram'>
				<h1>Facebook</h1>
				<div className='community--telegram__blocks'>
					{facebook.map((item: ICommunity, index: number) => (
						<Link to={item.value}>
							<div
								className={`community--telegram__blocks--block community--telegram__blocks--facebook `}
							>
								<span>
									<FaFacebookSquare />
								</span>
								<p>{item.label}</p>
							</div>
						</Link>
					))}
				</div>
			</div>
			<div className='community--telegram'>
				<h1>YouTube</h1>
				<div className='community--telegram__blocks'>
					{youtube.map((item: ICommunity, index: number) => (
						<Link to={item.value}>
							<div
								className={`community--telegram__blocks--block community--telegram__blocks--youtube `}
							>
								<span>
									<FaYoutube />
								</span>
								<p>{item.label}</p>
							</div>
						</Link>
					))}
				</div>
			</div>
			<div className='community--telegram'>
				<h1>GitHub</h1>
				<div className='community--telegram__blocks'>
					{github.map((item: ICommunity, index: number) => (
						<Link to={item.value}>
							<div
								className={`community--telegram__blocks--block community--telegram__blocks--github`}
							>
								<span>
									<FaGithubAlt />
								</span>
								<p>{item.label}</p>
							</div>
						</Link>
					))}
				</div>
			</div>
		</>
	)
}

export default CommunityList
