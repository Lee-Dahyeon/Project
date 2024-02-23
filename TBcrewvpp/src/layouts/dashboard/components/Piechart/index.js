import React from 'react';
import { Card, Stack } from '@mui/material';
import VuiBox from 'components/VuiBox';
import VuiTypography from 'components/VuiTypography';
import colors from 'assets/theme/base/colors';
import { FaEllipsisH } from 'react-icons/fa';
import linearGradient from 'assets/theme/functions/linearGradient';
import CircularProgress from '@mui/material/CircularProgress';

function Piechart() {
	const { info, gradients } = colors;
	const { cardContent } = gradients;

	return (
		<Card
			sx={{
				height: '100%',
				background: linearGradient(gradients.cardDark.main, gradients.cardDark.state, gradients.cardDark.deg)
			}}>
			<VuiBox sx={{ width: '100%' }}>
				<VuiBox
					display='flex'
					alignItems='center'
					// justifyContent='space-around'
					sx={{ width: '100%' }}
					mb='40px'>
					<VuiTypography variant='lg' color='white' mr='auto' fontWeight='bold'>
						주간 전력 분석
					</VuiTypography>
					<VuiBox
						display='flex'
						justifyContent='center'
						alignItems='center'
						bgColor='#22234B'
						sx={{ width: '37px', height: '37px', cursor: 'pointer', borderRadius: '12px' }}>
						<FaEllipsisH color={info.main} size='18px' />
					</VuiBox>
				</VuiBox>
				< Stack
					direction='row'
					justifyContent='space-around'
					sx={{
						mb: '30px'//-> 길이 바꾼 부분    // Stack 컴포넌트의 아래 여백을 설정
					}}
				>
					<Stack 
					direction='column'
					justifyContent='space-around'>
						<VuiBox
							// display='flex'
							sx={({ breakpoints }) => ({
								[breakpoints.up('xs')]: {
									flexDirection: 'column',
									gap: '16px',
									alignItems: 'center',
									justifyContent:'space-around'
									
								},
								[breakpoints.up('md')]: {
									flexDirection: 'row',
									alignItems: 'center',
									justifyContent:'space-around'
								}
								
							})}>
							<VuiBox sx={{ position: 'relative', display: 'inline-flex' }} >
								<CircularProgress
									variant='determinate'
									value={55}
									size={window.innerWidth >= 1024 ? 200 : window.innerWidth >= 768 ? 170 : 200}
									color='success'
								/>
								<VuiBox
									sx={{
										top: 0,
										left: 0,
										bottom: 0,
										right: 0,
										position: 'absolute',
										display: 'flex',
										alignItems: 'center',
										justifyContent: 'center'
									}}>
									<VuiBox display='flex' flexDirection='column' justifyContent='center' alignItems='center'>
										<VuiTypography color='text' variant='button' mb='4px'>
											전력생산
										</VuiTypography>
										<VuiTypography
											color='white'
											variant='d5'
											fontWeight='bold'
											mb='4px'
											sx={({ breakpoints }) => ({
												[breakpoints.up('xs')]: {
													fontSize: '29px'
												}
											})}>
											1560 Mwh
										</VuiTypography>
										<VuiTypography color='text' variant='button'>
											Total Score
										</VuiTypography>
									</VuiBox>
								</VuiBox>
							</VuiBox>
							<Stack
								direction='column'
								spacing='10px'
								maxWidth='100%'
								sx={({ breakpoints }) => ({
									mr: 'auto',
									[breakpoints.only('md')]: {
										mr: '75px'
									},
									[breakpoints.only('xl')]: {
										maxWidth: '40%'
									}
								})}>
								<VuiBox
									display='flex'
									width='220px'
									p='18px 18px'
									flexDirection='column'
									sx={({ breakpoints }) => ({
										background: linearGradient(cardContent.main, cardContent.state, cardContent.deg),
										borderRadius: '20px',
										[breakpoints.up('xl')]: {
											maxWidth: '110px !important',
											justifyContent:'space-around'
										},
										[breakpoints.up('xxl')]: {
											minWidth: '180px',
											maxWidth: '100% !important'
										}
									})}>
									<VuiTypography color='text' variant='button' fontWeight='regular' mb='5px'>
									Maximum
									</VuiTypography>
									<VuiTypography color='white' variant='lg' fontWeight='bold'>
										263 Mwh
									</VuiTypography>
								</VuiBox>
								<VuiBox
									display='flex'
									width='220px'
									p='18px 18px'
									flexDirection='column'
									sx={({ breakpoints }) => ({
										background: linearGradient(cardContent.main, cardContent.state, cardContent.deg),
										borderRadius: '20px',
										[breakpoints.up('xl')]: {
											maxWidth: '110px !important'
										},
										[breakpoints.up('xxl')]: {
											minWidth: '180px',
											maxWidth: '100% !important'
										}
									})}>
									<VuiTypography color='text' variant='button' fontWeight='regular' mb='5px'>
									Minimum
									</VuiTypography>
									<VuiTypography color='white' variant='lg' fontWeight='bold'>
										120 Mwh
									</VuiTypography>
								</VuiBox>
							</Stack>

						</VuiBox>

					</Stack>
					
					{/* --------------- */}
					<Stack direction='column' >
						<VuiBox
							// display='flex'
							sx={({ breakpoints }) => ({
								[breakpoints.up('xs')]: {
									flexDirection: 'column',
									gap: '16px',
									justifyContent: 'center',
									alignItems: 'center'
								},
								[breakpoints.up('md')]: {
									flexDirection: 'row',
									alignItems: 'center'
								}
							})}>
							<VuiBox sx={{ position: 'relative', display: 'inline-flex' }}>
								<CircularProgress
									variant='determinate'
									value={60}
									size={window.innerWidth >= 1024 ? 200 : window.innerWidth >= 768 ? 170 : 200}
									color='success'
								/>
								<VuiBox
									sx={{
										top: 0,
										left: 0,
										bottom: 0,
										right: 0,
										position: 'absolute',
										display: 'flex',
										alignItems: 'center',
										justifyContent: 'center'
									}}>
									<VuiBox display='flex' flexDirection='column' justifyContent='center' alignItems='center'>
										<VuiTypography color='text' variant='button' mb='4px'>
										 전력 거래 수익
										</VuiTypography>
										<VuiTypography
											color='white'
											variant='d5'
											fontWeight='bold'
											mb='4px'
											sx={({ breakpoints }) => ({
												[breakpoints.up('xs')]: {
													fontSize: '30px'
												}
											})}>
											90,500 원
										</VuiTypography>
										<VuiTypography color='text' variant='button'>
											Total Score
										</VuiTypography>
									</VuiBox>
								</VuiBox>
							</VuiBox>
							<Stack
								direction='column'
								spacing='10px'
								maxWidth='100%'
								sx={({ breakpoints }) => ({
									mr: 'auto',
									[breakpoints.only('md')]: {
										mr: '75px'
									},
									[breakpoints.only('xl')]: {
										maxWidth: '40%'
									}
								})}>
								<VuiBox
									display='flex'
									width='220px'
									p='18px 18px'
									flexDirection='column'
									sx={({ breakpoints }) => ({
										background: linearGradient(cardContent.main, cardContent.state, cardContent.deg),
										borderRadius: '20px',
										[breakpoints.up('xl')]: {
											maxWidth: '110px !important'
										},
										[breakpoints.up('xxl')]: {
											minWidth: '180px',
											maxWidth: '100% !important'
										}
									})}>
									<VuiTypography color='text' variant='button' fontWeight='regular' mb='5px'>
									SMP Average
									</VuiTypography>
									<VuiTypography color='white' variant='lg' fontWeight='bold'>
										90.5 원
									</VuiTypography>
								</VuiBox>
								<VuiBox
									display='flex'
									width='220px'
									p='18px 18px'
									flexDirection='column'
									sx={({ breakpoints }) => ({
										background: linearGradient(cardContent.main, cardContent.state, cardContent.deg),
										borderRadius: '20px',
										[breakpoints.up('xl')]: {
											maxWidth: '110px !important'
										},
										[breakpoints.up('xxl')]: {
											minWidth: '180px',
											maxWidth: '100% !important'
										}
									})}>
									<VuiTypography color='text' variant='button' fontWeight='regular' mb='5px'>
									Power trading
									</VuiTypography>
									<VuiTypography color='white' variant='lg' fontWeight='bold'>
										1000 Mwh
									</VuiTypography>
								</VuiBox>
							</Stack>

						</VuiBox>

					</Stack>

					{/* ----------- */}
					{/* --------------- */}
					<Stack direction='column' >
						<VuiBox
							// display='flex'
							sx={({ breakpoints }) => ({
								[breakpoints.up('xs')]: {
									flexDirection: 'column',
									gap: '16px',
									justifyContent: 'center',
									alignItems: 'center'
								},
								[breakpoints.up('md')]: {
									flexDirection: 'row'
								}
							})}>
							<VuiBox sx={{ position: 'relative', display: 'inline-flex' }}>
								<CircularProgress
									variant='determinate'
									value={70}
									size={window.innerWidth >= 1024 ? 200 : window.innerWidth >= 768 ? 170 : 200}
									color='success'
								/>
								<VuiBox
									sx={{
										top: 0,
										left: 0,
										bottom: 0,
										right: 0,
										position: 'absolute',
										display: 'flex',
										alignItems: 'center',
										justifyContent: 'center'
									}}>
									<VuiBox display='flex' flexDirection='column' justifyContent='center' alignItems='center'>
										<VuiTypography color='text' variant='button' mb='4px'>
											REC 수익
										</VuiTypography>
										<VuiTypography
											color='white'
											variant='d5'
											fontWeight='bold'
											mb='4px'
											sx={({ breakpoints }) => ({
												[breakpoints.up('xs')]: {
													fontSize: '30px'
												}
											})}>
											721,200원
										</VuiTypography>
										<VuiTypography color='text' variant='button'>
											Total Score
										</VuiTypography>
									</VuiBox>
								</VuiBox>
							</VuiBox>
							<Stack
								direction='column'
								spacing='10px'
								maxWidth='100%'
								sx={({ breakpoints }) => ({
									mr: 'auto',
									[breakpoints.only('md')]: {
										mr: '75px'
									},
									[breakpoints.only('xl')]: {
										maxWidth: '40%'
									}
								})}>
								<VuiBox
									display='flex'
									width='220px'
									p='18px 18px'
									flexDirection='column'
									sx={({ breakpoints }) => ({
										background: linearGradient(cardContent.main, cardContent.state, cardContent.deg),
										borderRadius: '20px',
										[breakpoints.up('xl')]: {
											maxWidth: '110px !important'
										},
										[breakpoints.up('xxl')]: {
											minWidth: '180px',
											maxWidth: '100% !important'
										}
									})}>
									<VuiTypography color='text' variant='button' fontWeight='regular' mb='5px'>
									REC	Price
									</VuiTypography>
									<VuiTypography color='white' variant='lg' fontWeight='bold'>
									72,120원
									</VuiTypography>
								</VuiBox>
								<VuiBox
									display='flex'
									width='220px'
									p='18px 18px'
									flexDirection='column'
									sx={({ breakpoints }) => ({
										background: linearGradient(cardContent.main, cardContent.state, cardContent.deg),
										borderRadius: '20px',
										[breakpoints.up('xl')]: {
											maxWidth: '110px !important'
										},
										[breakpoints.up('xxl')]: {
											minWidth: '180px',
											maxWidth: '100% !important'
										}
									})}>
									<VuiTypography color='text' variant='button' fontWeight='regular' mb='5px'>
									Exchange volume
									</VuiTypography>
									<VuiTypography color='white' variant='lg' fontWeight='bold'>
										10 회
									</VuiTypography>
								</VuiBox>
							</Stack>

						</VuiBox>

					</Stack>

					{/* ----------- */}
				</Stack>
			</VuiBox>
		</Card>
	);
}

export default Piechart;
