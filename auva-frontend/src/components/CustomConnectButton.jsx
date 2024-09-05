import React from 'react'
import { ConnectButton } from '@rainbow-me/rainbowkit'

function CustomConnectButton() {
  return (
    <ConnectButton.Custom>
      {({
        account,
        chain,
        openAccountModal,
        openChainModal,
        openConnectModal,
        authenticationStatus,
        mounted,
      }) => {
        // Note: If your app doesn't use authentication, you
        // can remove all 'authenticationStatus' checks
        const ready = mounted && authenticationStatus !== 'loading';
        const connected =
          ready &&
          account &&
          chain &&
          (!authenticationStatus ||
            authenticationStatus === 'authenticated');

        return (
          <div
            {...(!ready && {
              'aria-hidden': true,
              'style': {
                opacity: 0,
                pointerEvents: 'none',
                userSelect: 'none',
              },
            })}
            className='btn w-100 text-center'
          >
            {(() => {
              if (!connected) {
                return (
                  <span onClick={openConnectModal} type="button">
                    Connect Wallet
                  </span>
                );
              }

              if (chain.unsupported) {
                return (
                  <span onClick={openChainModal} type="button">
                    Wrong network
                  </span>
                );
              }

              return (
                <span
                    onClick={openChainModal}
                    type="button"
                  >
                    {chain.name}
                    {account.displayBalance
                      ? ` (${account.displayBalance})`
                      : ''}
                  </span>
              );
            })()}
          </div>
        );
      }}
    </ConnectButton.Custom>
  )
}

export default CustomConnectButton
