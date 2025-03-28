'use client';

import React, { Fragment, useState } from 'react';
import { Dialog, Menu, Transition } from '@headlessui/react';
import {
  Bars3Icon,
  BellIcon,
  CalendarIcon,
  Cog6ToothIcon,
  HomeIcon,
  PlusCircleIcon,
  UserIcon,
  WalletIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline';
import { ChevronDownIcon, MagnifyingGlassIcon } from '@heroicons/react/20/solid';
import { CheckBadgeIcon } from '@heroicons/react/16/solid';
import { ClockIcon } from '@heroicons/react/16/solid';
import Image from 'next/image';
import Link from 'next/link';
import { useUserContext } from '../context/UserContext';

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

// Define types for navigation items
type NavigationItem = {
  name: string;
  href: string;
  icon: React.ComponentType<React.ComponentProps<'svg'>>;
  current: boolean;
  children?: NavigationChildItem[];
};

type NavigationChildItem = {
  name: string;
  href: string;
  description?: string;
};

const SideBar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { subscriptionPlan, subscriptionPrice } = useUserContext();

  const navigation: NavigationItem[] = [
    { 
      name: "Subscription Plan", 
      href: "#", 
      icon: PlusCircleIcon, 
      current: false, 
      children: subscriptionPlan ? [
        { 
          name: `${subscriptionPlan} Store`, 
          href: "#",
          description: `₦${subscriptionPrice?.toLocaleString() || ''} per month`
        }
      ] : [
        { name: "No active subscription", href: "/upgrade" }
      ]
    },
    { name: "Dashboard", href: "/dashboard/centered", icon: HomeIcon, current: false },
    { name: "Wallet", href: "/dashboard/account", icon: WalletIcon, current: false },
    { name: "Upgrade", href: "/upgrade", icon: CheckBadgeIcon, current: false },
    { 
      name: "Trade", 
      href: "#", 
      icon: CalendarIcon, 
      current: false, 
      children: [
        { name: "New retail section", href: "/dashboard/trade/new-retail" },
        { name: "Wholesale section", href: "/trade/wholesale" },
      ] 
    },
    { name: "Transaction History", href: "/dashboard/transactions", icon: ClockIcon, current: false },
    { name: "Profile", href: "/profile", icon: UserIcon, current: false },
  ];

  const teams = [
    { id: 1, name: 'Heroicons', href: '#', initial: 'H', current: false },
    { id: 2, name: 'Tailwind Labs', href: '#', initial: 'T', current: false },
    { id: 3, name: 'Workcation', href: '#', initial: 'W', current: false },
  ];

  const userNavigation = [
    { name: 'Your profile', href: '#' },
    { name: 'Sign out', href: '#' },
  ];

  return (
    <>
      <div>
        {/* Mobile sidebar dialog */}
        <Transition.Root show={sidebarOpen} as={Fragment}>
          <Dialog as="div" className="relative z-50 lg:hidden" onClose={setSidebarOpen}>
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-gray-900/80" />
            </Transition.Child>

            <div className="fixed inset-0 flex">
              <Transition.Child
                as={Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="-translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="-translate-x-full"
              >
                <Dialog.Panel className="relative mr-16 flex w-full max-w-xs flex-1">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-300"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="absolute left-full top-0 flex w-16 justify-center pt-5">
                      <button type="button" className="-m-2.5 p-2.5" onClick={() => setSidebarOpen(false)}>
                        <span className="sr-only">Close sidebar</span>
                        <XMarkIcon className="h-6 w-6 text-white" aria-hidden="true" />
                      </button>
                    </div>
                  </Transition.Child>
                  <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-green-700 px-6 pb-4">
                    <div className="flex h-16 shrink-0 items-center">
                      <div className="flex h-16 shrink-0 items-center">
                        <Link href="/">
                          <Image className="h-10 w-auto" src="/logo.png" alt="Your Company" width={100} height={40} priority />
                        </Link>
                      </div>
                    </div>
                    <nav className="flex flex-1 flex-col">
                      <ul role="list" className="flex flex-1 flex-col gap-y-7">
                        <li>
                          <ul role="list" className="-mx-2 space-y-1">
                            {navigation.map((item) => (
                              <li key={item.name}>
                                {item.children ? (
                                  <Menu as="div" className="relative">
                                    <Menu.Button
                                      className={classNames(
                                        item.current
                                          ? 'bg-green-700 text-white'
                                          : 'text-green-200 hover:text-white hover:bg-green-700',
                                        'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold w-full'
                                      )}
                                    >
                                      <item.icon
                                        className={classNames(
                                          item.current ? 'text-white' : 'text-green-200 group-hover:text-white',
                                          'h-6 w-6 shrink-0'
                                        )}
                                        aria-hidden="true"
                                      />
                                      {item.name}
                                      <ChevronDownIcon className="ml-auto h-5 w-5 text-green-200 group-hover:text-white" aria-hidden="true" />
                                    </Menu.Button>
                                    <Transition
                                      as={Fragment}
                                      enter="transition ease-out duration-100"
                                      enterFrom="transform opacity-0 scale-95"
                                      enterTo="transform opacity-100 scale-100"
                                      leave="transition ease-in duration-75"
                                      leaveFrom="transform opacity-100 scale-100"
                                      leaveTo="transform opacity-0 scale-95"
                                    >
                                      <Menu.Items className="absolute left-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-green-600 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                        <div className="py-1">
                                          {item.children.map((child) => (
                                            <Menu.Item key={child.name}>
                                              {({ active }) => (
                                                <Link
                                                  href={child.href}
                                                  className={classNames(
                                                    active ? 'bg-green-700 text-white' : 'text-green-200',
                                                    'block px-4 py-2 text-sm'
                                                  )}
                                                >
                                                  <div className="font-medium">{child.name}</div>
                                                  {child.description && (
                                                    <div className="text-xs mt-1">{child.description}</div>
                                                  )}
                                                </Link>
                                              )}
                                            </Menu.Item>
                                          ))}
                                        </div>
                                      </Menu.Items>
                                    </Transition>
                                  </Menu>
                                ) : (
                                  <Link
                                    href={item.href}
                                    className={classNames(
                                      item.current
                                        ? 'bg-green-700 text-white'
                                        : 'text-green-200 hover:text-white hover:bg-green-700',
                                      'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold'
                                    )}
                                  >
                                    <item.icon
                                      className={classNames(
                                        item.current ? 'text-white' : 'text-green-200 group-hover:text-white',
                                        'h-6 w-6 shrink-0'
                                      )}
                                      aria-hidden="true"
                                    />
                                    {item.name}
                                  </Link>
                                )}
                              </li>
                            ))}
                          </ul>
                        </li>
                        <li>
                          <div className="text-xs font-semibold leading-6 text-green-200">Your teams</div>
                          <ul role="list" className="-mx-2 mt-2 space-y-1">
                            {teams.map((team) => (
                              <li key={team.name}>
                                <Link
                                  href={team.href}
                                  className={classNames(
                                    team.current
                                      ? 'bg-green-700 text-white'
                                      : 'text-green-200 hover:text-white hover:bg-green-700',
                                    'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold'
                                  )}
                                >
                                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border border-green-400 bg-green-500 text-[0.625rem] font-medium text-white">
                                    {team.initial}
                                  </span>
                                  <span className="truncate">{team.name}</span>
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </li>
                        <li className="mt-auto">
                          <Link
                            href="#"
                            className="group -mx-2 flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-green-200 hover:bg-green-700 hover:text-white"
                          >
                            <Cog6ToothIcon
                              className="h-6 w-6 shrink-0 text-green-200 group-hover:text-white"
                              aria-hidden="true"
                            />
                            Settings
                          </Link>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition.Root>

        {/* Static sidebar for desktop */}
        <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
          <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-green-600 px-6 pb-4">
            <div className="flex h-16 shrink-0 items-center">
              <div className="flex h-16 shrink-0 items-center">
                <Link href="/">
                  <Image className="h-10 w-auto" src="/logo.png" alt="Your Company" width={100} height={40} priority />
                </Link>
              </div>
            </div>
            <nav className="flex flex-1 flex-col">
              <ul role="list" className="flex flex-1 flex-col gap-y-7">
                <li>
                  <ul role="list" className="-mx-2 space-y-1">
                    {navigation.map((item) => (
                      <li key={item.name}>
                        {item.children ? (
                          <Menu as="div" className="relative">
                            <Menu.Button
                              className={classNames(
                                item.current
                                  ? 'bg-green-700 text-white'
                                  : 'text-green-200 hover:text-white hover:bg-green-700',
                                'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold w-full'
                              )}
                            >
                              <item.icon
                                className={classNames(
                                  item.current ? 'text-white' : 'text-green-200 group-hover:text-white',
                                  'h-6 w-6 shrink-0'
                                )}
                                aria-hidden="true"
                              />
                              {item.name}
                              <ChevronDownIcon className="ml-auto h-5 w-5 text-green-200 group-hover:text-white" aria-hidden="true" />
                            </Menu.Button>
                            <Transition
                              as={Fragment}
                              enter="transition ease-out duration-100"
                              enterFrom="transform opacity-0 scale-95"
                              enterTo="transform opacity-100 scale-100"
                              leave="transition ease-in duration-75"
                              leaveFrom="transform opacity-100 scale-100"
                              leaveTo="transform opacity-0 scale-95"
                            >
                              <Menu.Items className="absolute left-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-green-600 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                <div className="py-1">
                                  {item.children.map((child) => (
                                    <Menu.Item key={child.name}>
                                      {({ active }) => (
                                        <Link
                                          href={child.href}
                                          className={classNames(
                                            active ? 'bg-green-700 text-white' : 'text-green-200',
                                            'block px-4 py-2 text-sm'
                                          )}
                                        >
                                          <div className="font-medium">{child.name}</div>
                                          {child.description && (
                                            <div className="text-xs mt-1">{child.description}</div>
                                          )}
                                        </Link>
                                      )}
                                    </Menu.Item>
                                  ))}
                                </div>
                              </Menu.Items>
                            </Transition>
                          </Menu>
                        ) : (
                          <Link
                            href={item.href}
                            className={classNames(
                              item.current
                                ? 'bg-green-700 text-white'
                                : 'text-green-200 hover:text-white hover:bg-green-700',
                              'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold'
                            )}
                          >
                            <item.icon
                              className={classNames(
                                item.current ? 'text-white' : 'text-green-200 group-hover:text-white',
                                'h-6 w-6 shrink-0'
                              )}
                              aria-hidden="true"
                            />
                            {item.name}
                          </Link>
                        )}
                      </li>
                    ))}
                  </ul>
                </li>
                <li>
                  <div className="text-xs font-semibold leading-6 text-green-200">Your teams</div>
                  <ul role="list" className="-mx-2 mt-2 space-y-1">
                    {teams.map((team) => (
                      <li key={team.name}>
                        <Link
                          href={team.href}
                          className={classNames(
                            team.current
                              ? 'bg-green-700 text-white'
                              : 'text-green-200 hover:text-white hover:bg-green-700',
                            'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold'
                          )}
                        >
                          <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border border-green-400 bg-green-500 text-[0.625rem] font-medium text-white">
                            {team.initial}
                          </span>
                          <span className="truncate">{team.name}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
                <li className="mt-auto">
                  <Link
                    href="#"
                    className="group -mx-2 flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-green-200 hover:bg-green-700 hover:text-white"
                  >
                    <Cog6ToothIcon
                      className="h-6 w-6 shrink-0 text-green-200 group-hover:text-white"
                      aria-hidden="true"
                    />
                    Settings
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        <div className="lg:pl-72">
          <div className="sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-4 border-b border-gray-200 bg-lime-100 px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-8">
            <button type="button" className="-m-2.5 p-2.5 text-gray-700 lg:hidden" onClick={() => setSidebarOpen(true)}>
              <span className="sr-only">Open sidebar</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>

            <div>
              <h1 className='text-2xl font-bold'>
                Dashboard
              </h1>
            </div>

            <div className="h-6 w-px bg-gray-900/10 lg:hidden" aria-hidden="true" />

            <div className="flex flex-1 gap-x-4 self-stretch lg:gap-x-6">
              <form className="relative flex flex-1" action="#" method="GET">
                <label htmlFor="search-field" className="sr-only">
                  Search
                </label>
                <MagnifyingGlassIcon
                  className="pointer-events-none absolute inset-y-0 left-0 h-full w-5 text-gray-400"
                  aria-hidden="true"
                />
                <input
                  id="search-field"
                  className="block h-full w-full border-0 py-0 bg-lime-100 pl-8 pr-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm"
                  placeholder="Search..."
                  type="search"
                  name="search"
                />
              </form>
              <div className="flex items-center gap-x-4 lg:gap-x-6">
                <button type="button" className="-m-2.5 p-2.5 text-gray-400 hover:text-gray-500">
                  <span className="sr-only">View notifications</span>
                  <BellIcon className="h-6 w-6" aria-hidden="true" />
                </button>

                <div className="hidden lg:block lg:h-6 lg:w-px lg:bg-gray-900/10" aria-hidden="true" />

                <Menu as="div" className="relative">
                  <Menu.Button className="-m-1.5 flex items-center p-1.5">
                    <span className="sr-only">Open user menu</span>
                    <span className="hidden lg:flex lg:items-center">
                      <span className="ml-4 text-sm font-semibold leading-6 text-gray-900" aria-hidden="true">
                        Tom Cook
                      </span>
                      <ChevronDownIcon className="ml-2 h-5 w-5 text-gray-400" aria-hidden="true" />
                    </span>
                  </Menu.Button>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-10 mt-2.5 w-32 origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-gray-900/5 focus:outline-none">
                      {userNavigation.map((item) => (
                        <Menu.Item key={item.name}>
                          {({ active }) => (
                            <Link
                              href={item.href}
                              className={classNames(
                                active ? 'bg-gray-50' : '',
                                'block px-3 py-1 text-sm leading-6 text-gray-900'
                              )}
                            >
                              {item.name}
                            </Link>
                          )}
                        </Menu.Item>
                      ))}
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>

            {/* Subscription Plan Badge */}
            {subscriptionPlan && (
              <div className="ml-auto flex items-center">
                <div className="rounded-md bg-green-100 px-3 py-1 text-sm font-medium text-green-800 flex items-center">
                  <CheckBadgeIcon className="h-4 w-4 mr-1 text-green-600" />
                  {subscriptionPlan} - ₦{subscriptionPrice?.toLocaleString()}
                </div>
              </div>
            )}
          </div>

          {/* <main className="py-10">
            <div className="px-4 sm:px-6 lg:px-8"> */}
              {/* Your main content goes here */}
            {/* </div>
          </main> */}
        </div>
      </div>
    </>
  );
};

export default SideBar;