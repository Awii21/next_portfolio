import Section from '../../structure/section';
import Container from '../../structure/container';

import Image from 'next/image';
import Icon from '../../utils/icon.util';

import css from '../../../styles/sections/projects/recent.module.scss';

export default function GitProjects({ repos, user }) {
	return (
		<Section classProp={css.section}>	
			<Container classProp={css.container} spacing={'verticalXXXLrg'}>
				<h3>Recent Projects</h3>
				<section className={css.profile}>
					<Image className={css.profilePhoto} src={`${user[0].avatar_url}`} alt="Github Profile Photo" height={60} width={60} />
					<span class={css.details}>
						<p>{user[0].name}</p>
						<a href={user[0].html_url} rel="noreferrer" target="_blank">
							{user[0].html_url} <Icon icon={['far', 'arrow-up-right-from-square']} />
						</a>
					</span>
				</section>
				<div className={css.projects}>
					{
						repos.map(({ name, description, topics, forks_count, html_url, language, watchers, homepage, pushed_at }, index) => {
							const date = new Date(pushed_at).toDateString();
							
							// Fix the error by adding a conditional check for language before using toLowerCase
							return (
								<article key={index} className={`${css.project} transition-all ease-in-out duration-300 hover:shadow-2xl hover:scale-105`}>
									<span className={css.header}>
										<a href={html_url} rel="noreferrer" target="_blank" className='transition-all ease-in-out duration-200 hover:shadow-2xl hover:scale-105 hover:-translate-y-1'>
											{name} <Icon icon={['fad', 'arrow-up-right-from-square']} />
										</a>
										<p className={css.homepage}>{homepage}</p>
									</span>
									<span className={css.descriptionContainer}>
										<p className={css.description}>{description}</p>
									</span>
									<span className={css.details}>
										<p className='cursor-default transition-all ease-in-out duration-300 hover:shadow-2xl hover:scale-110 hover:translate-x-3 hover:font-extrabold'>
											<i className={`devicon-${language ? language.toLowerCase() : 'default'}-plain colored`} /> {language || 'Unknown Language'}
										</p>
										<p className='cursor-default font-bold transition-all duration-300 ease-in-out hover:scale-125 hover:text-customYellow'>
											<Icon icon={['fad', 'star']} /> {watchers}
										</p>
										<p className='cursor-default font-extrabold transition-all duration-300 ease-in-out hover:scale-125 hover:text-gray-950'>
											<Icon icon={['fad', 'code-branch']} /> {forks_count}
										</p>
										<p className={css.pushedAt}>{date}</p>
									</span>
									<span className={css.topicsContainer}>
										{
											topics.map((e, index) => (
												<span key={index} className={css.topics}>
													<i className="devicon-github-plain"></i> {e}
												</span>
											))
										}
									</span>
								</article>
							);
						})
					}
				</div>
				{/*
				<pre>{ JSON.stringify(user, undefined, 2) }</pre>
				<pre>{ JSON.stringify(repos, undefined, 2) }</pre>
				*/}
			</Container>
		</Section>
	);
}
