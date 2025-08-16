import SkeletonCast from './SkeletonCast';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const fakeImg = [
	'https://upload.wikimedia.org/wikipedia/commons/6/69/Chris_Hemsworth_by_Gage_Skidmore_3.jpg',
	'https://images.squarespace-cdn.com/content/v1/5efb7a015dc2ac0077a81ea5/77ff787f-098b-4c0d-9ad7-75fe91407101/59+Of+The+Greatest+Actors+Matched+By+Skill%2C+From+Best+To+Worst+%28Photos%29.jpg',
	'https://a1cf74336522e87f135f-2f21ace9a6cf0052456644b80fa06d4f.ssl.cf2.rackcdn.com/images/characters/large/800/Barney-Stinson.How-I-Met-Your-Mother.webp',
	'https://upload.wikimedia.org/wikipedia/en/e/e0/Ted_Mosby.jpg',
	'https://hips.hearstapps.com/hmg-prod/images/hbz-062617-mcm-1498525631.jpg?crop=0.501xw:1.00xh;0.250xw,0&resize=1200:*',
	'https://m.media-amazon.com/images/M/MV5BMGJiZTc4NDAtODBiMC00NmQ4LWIzZTMtYTM1NjY0NDdkMzllXkEyXkFqcGc@._V1_.jpg',
	'https://i0.wp.com/www.thewrap.com/wp-content/uploads/2015/08/molly-gordon.jpg?fit=618%2C412&ssl=1',
	'https://i.pinimg.com/474x/04/e1/78/04e1784fc85d72ccec586ca224ce361a.jpg',
	'https://i.redd.it/txu4mib6m8px.jpg',
	'https://static.tvtropes.org/pmwiki/pub/images/elena_gilbert.jpg',
	'https://cdn.aaihs.org/wp-content/uploads/2023/10/shutterstock_1223473114.jpg',
	'https://hips.hearstapps.com/hmg-prod/images/gettyimages-1132645313.jpg?crop=1.00xw:0.667xh;0,0.00680xh&resize=980:*',
	'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhcFS6vN1EFgi2cap7vObpZ3jEcoExv_kCeA&s',
	'https://im.indiatimes.in/content/2023/Jul/000_33EM74J_64c24a7e42072.jpg?w=1200&h=900&cc=1&webp=1&q=75',
	'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfoj7yewkdF3SC0s8UHOu4CntK8B8ADDDX2A&s',
	'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTD-n3ljL0fDVwOx1k0Tw5b4X00s8Ob1N0y7Q&s	',
];

const CastContainer = ({ cast }) => {
	return (
		<>
			{cast ? (
				<div className="flex  items-center">
					<div>
						<span className="text-[#9b9da3]">Cast</span>
					</div>
					<div className="flex flex-wrap  gap-4 my-4">
						{cast.map((act, index) => {
							return (
								<div className="flex min-w-40 justify-center items-center flex-col">
									<LazyLoadImage
										alt="pic"
										src={fakeImg[index]}
										className="object-cover w-28 h-28 rounded-full"
									/>
									<span className="mt-2">{act}</span>
								</div>
							);
						})}
					</div>
				</div>
			) : (
				<SkeletonCast />
			)}
		</>
	);
};

export default CastContainer;
